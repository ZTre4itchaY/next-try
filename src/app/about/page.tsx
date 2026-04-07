

const getData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data")
        }, 1000)
    })
}

export default async function About() {
    const data = await getData() as string
    return <div>About: {data}</div>
}