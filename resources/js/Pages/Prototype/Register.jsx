import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { Link,Head } from "@inertiajs/react";

export default function Register(){
    // <!-- Desktop Only -->
    return (
    <>
        <Head title="Register"/>
        <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div class="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    class="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div class="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt=""/>
                    <div class="my-[70px]">
                        <div class="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p class="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>
                    <form class="w-[370px]">
                        <div class="flex flex-col gap-6">
                            <div>
                                <InputLabel
                                forInput = "fullname"
                                value = "Full Name"
                                />
                                <TextInput
                                    type="text" name="fullname"
                                    placeholder="Your Fullname.."
                                />
                            </div>
                            <div>
                            <InputLabel
                                forInput = "email"
                                value = "Email"
                                />
                                <TextInput
                                    type="email" name="email"
                                    placeholder="Your Email.."
                                />
                            </div>
                            <div>
                            <InputLabel
                                forInput = "password"
                                value = "Password"
                                />
                                <TextInput
                                    type="password" name="password"
                                    placeholder="Your Password.."
                                />
                            </div>
                        </div>
                        <div class="grid space-y-[14px] mt-[30px]">
                            <Link href={route('prototype.dashboard')}>
                                <Button type="button" variant="primary">
                                    <span class="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                            </Link>
                            <Link href={route('prototype.login')}>
                                <Button type="button" variant="light-outline">
                                    <span class="text-base font-semibold">
                                    Sign In to My Account
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
