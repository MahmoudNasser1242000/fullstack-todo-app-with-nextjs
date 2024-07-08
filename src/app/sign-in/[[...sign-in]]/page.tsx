import { SignIn } from "@clerk/nextjs";

export default function Login() {
    return (
        <div className="w-full h-full flex justify-center align-middle mt-6">
            <SignIn routing="hash"/>
        </div>
    );
}