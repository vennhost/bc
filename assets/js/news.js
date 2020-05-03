const loadNews = async () => {
    const resp = await fetch("http://localhost:3005")
    const news = resp.json()
    console.log()
}