import { getPostCodesServices, UserPostCodesServices } from "./services/UserPostCodesServices"

exports.UserPostCodesHandler = async (event: any) => {

    console.log("event1", event)

    try {
        const data = JSON.parse(event)
        // const codes: any = await getPostCodesServices()

        await UserPostCodesServices(data)

        // if (codes.length === 0) {
        //     await UserPostCodesServices(data)
        //     console.log("This is some norarray so executed single one")

        // } else {
        //     let d = codes.some((e: any) => e.worksman_id == data.worksman_id && e.postcodes == data.postcodes)
        //     console.log("This is d", d)
        //     console.log("e.worksman_id === data.worksman_id", typeof (data.worksman_id), typeof (codes[0].worksman_id))
        //     if (d === false) {
        //         await UserPostCodesServices(data)
        //     } else {
        //         console.log("This post code already excecuted")
        //         JSON.stringify('This post code already excecuted')
        //     }
        // }

        // console.warn("This is get all codes", codes, codes.length)
        // console.warn(data)

        return {
            statusCode: 200,
            headers: {},
            body: data
        }
    } catch (exception) {
        console.log(`UserPostCodesHandler Error 1 ${exception}`)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}