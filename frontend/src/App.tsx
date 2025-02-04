import { useEffect, useRef, useCallback } from 'react'
import { WikiCard } from './components/WikiCard'
import { useWikiArticles } from './hooks/useWikiArticles'

function App() {
  const { articles, loading, fetchArticles } = useWikiArticles()
  const observerTarget = useRef(null)

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries
      if (target.isIntersecting && !loading) {
        fetchArticles()
      }
    },
    [loading, fetchArticles]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    })

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [handleObserver])

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className="h-screen w-full bg-black text-white overflow-y-scroll snap-y snap-mandatory">
      <div className="fixed top-4 left-4 z-50 text-2xl font-bold text-white drop-shadow-lg">
        WikiTok
      </div>
      {articles.map((article) => (
        <WikiCard key={article.pageid} article={article} />
      ))}
      <div ref={observerTarget} className="h-10" />
      {loading && (
        <div className="h-screen w-full flex items-center justify-center">
          Loading...
        </div>
      )}
    </div>
  )
}

export default App
