interface WikiArticle {
    title: string;
    extract: string;
    pageid: number;
    thumbnail?: {
        source: string;
        width: number;
        height: number;
    };
}

interface WikiCardProps {
    article: WikiArticle;
}

export function WikiCard({ article }: WikiCardProps) {
    return (
        <div className="h-screen w-full flex items-center justify-center snap-start">
            <div className="bg-white max-w-lg w-full mx-4 rounded-xl shadow-xl p-6">
                {article.thumbnail && (
                    <img
                        src={article.thumbnail.source}
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                )}
                <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                <p className="text-gray-700">{article.extract}</p>
                <a
                    href={`https://en.wikipedia.org/?curid=${article.pageid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500 hover:text-blue-600"
                >
                    Read more →
                </a>
            </div>
        </div>
    );
} 