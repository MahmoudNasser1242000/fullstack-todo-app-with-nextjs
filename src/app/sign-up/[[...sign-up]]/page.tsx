import { SignUp } from "@clerk/nextjs";

export default function Register() {
    return (
        <div className="w-full h-full flex justify-center align-middle mt-8">
            <SignUp routing="hash" />
        </div>
    );
}