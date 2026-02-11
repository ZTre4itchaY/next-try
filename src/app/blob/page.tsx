const getData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("这是Blob页面")
        }, 5000)
    })
}

export default async function Blob(){

    const data = await getData()

    return (
        <div>{data as string}</div>
    )
}