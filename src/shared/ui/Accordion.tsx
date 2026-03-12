import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "../utils"

/**
 * @description 아코디언 컴포넌트
 */
function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn(
                "rounded-lg bg-white dark:bg-slate-800",
                "shadow-sm hover:shadow-md",
                "transition-shadow duration-300",
                className
            )}
            {...props}
        />
    )
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "group flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium",
                    "transition-colors duration-300",
                    "text-slate-900 dark:text-white",
                    "hover:text-indigo-500",
                    "data-[state=open]:text-indigo-500",
                    className
                )}
                {...props}
            >
                {children}

                <ChevronDownIcon
                    className="
                        pt-1.5 size-5 shrink-0
                        transition-transform duration-300 ease-out
                        group-data-[state=open]:rotate-180
                        text-muted-foreground
                    "
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn(
                "overflow-hidden text-sm",
                "data-[state=open]:animate-[accordion-down_0.3s_ease-out]",
                "data-[state=closed]:animate-[accordion-up_0.3s_ease-out]"
            )}
            {...props}
        >
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
