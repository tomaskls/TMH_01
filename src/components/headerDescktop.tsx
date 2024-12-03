import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
    NavigationMenu,
    NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function DesktopNav() {
    return (
        <div className="hidden md:block bg-white fixed top-0 left-0 w-full h-11 z-50 ">
            <div className=" w-100 h-12 flex items-center justify-between mr-4 ">
                <h2 className="hidden md:block scroll-m-20 pl-6 text-3xl font-semibold tracking-tight first:mt-0">
                    Hemsedal Fjellcamp
                </h2>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Om
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Overnatting</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Loftet
                                    </NavigationMenuLink>
                                </Link>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Stabburet
                                    </NavigationMenuLink>
                                </Link>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Utleiehytte
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Campingplassen
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Aktivitetar
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Kontakt oss
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
                <Button>
                    <Link href="/docs" legacyBehavior passHref>
                    bestill nå
                    </Link>
                </Button>
            </div>
        </div>

    )
}