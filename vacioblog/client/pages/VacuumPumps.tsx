import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { articles1, Article1 } from "@/lib/articles1";
import ArticleCard1 from "@/components/ArticleCard1";
import ArticleDetail1 from "@/components/ArticleDetail1";
import BlogHeader1 from "@/components/BlogHeader1";

export default function VacuumPumps() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState<Article1 | null>(null);

  // Detectar slug en la URL y abrir el artículo correspondiente
  useEffect(() => {
    const slug = location.pathname.replace("/", ""); // ✅ evita duplicar /blog/blog
    const found = articles1.find((a) => a.slug === slug);

    if (!found && slug) {
      console.warn("Slug no encontrado:", slug);
      navigate("/"); // ✅ redirige al blog si no hay coincidencia
      return;
    }

    setSelectedArticle(found || null);
  }, [location.pathname]);

  // Abrir modal y actualizar URL
  const handleOpenArticle = (article: Article1) => {
    navigate(`/${article.slug}`);      // ✅ primero actualiza la URL
    setSelectedArticle(article);       // ✅ luego abre el modal
  };

  // Cerrar modal y restaurar URL
  const handleCloseArticle = () => {
    setSelectedArticle(null);
    navigate("/"); // ✅ vuelve a la raíz del blog
  };

  return (
    <div className="h-screen overflow-y-auto scrollbar-custom bg-white flex flex-col">
      {/* Header */}
      <BlogHeader1 />

      {/* Articles Grid */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles1.map((article) => (
              <ArticleCard1
                key={article.id}
                article={article}
                onClick={() => handleOpenArticle(article)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Overlay para cerrar artículo */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleCloseArticle}
        />
      )}

      {/* Modal del artículo */}
      <ArticleDetail1
        article={selectedArticle}
        onClose={handleCloseArticle}
      />
    </div>
  );
}
