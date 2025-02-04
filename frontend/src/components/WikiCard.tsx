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
        <div className="h-screen w-full flex items-center justify-center snap-start relative">
            <div className="h-full w-full relative">
                {article.thumbnail && (
                    <div className="absolute inset-0">
                        <img
                            src={article.thumbnail.source}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Lighter overlay for better visibility */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                    </div>
                )}
                {/* Content container with z-index to ensure it's above the image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h2 className="text-2xl font-bold mb-3 drop-shadow-lg">{article.title}</h2>
                    <p className="text-gray-100 mb-4 drop-shadow-lg">{article.extract}</p>
                    <a
                        href={`https://en.wikipedia.org/?curid=${article.pageid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white hover:text-gray-200 drop-shadow-lg"
                    >
                        Read more →
                    </a>
                </div>
            </div>
        </div>
    );
} 