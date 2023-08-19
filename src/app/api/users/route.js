import { setUser } from "@/handlers/handlers";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        let body = await req.json();
        setUser(body);
        return NextResponse.json({
            success: true,
            message: "User Created Sucessfully",
            status: 201
        });
    }
    catch (err) {
        console.log(err);
        return NextResponse.error(err);
    }
}
