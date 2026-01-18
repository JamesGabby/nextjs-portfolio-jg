import { cn } from "@/lib/utils";

// Define custom components to use inside MDX
const components = {
  h1: ({ className, ...props }: any) => (
    <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props} />
  ),
  h2: ({ className, ...props }: any) => (
    <h2 className={cn("mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} />
  ),
  p: ({ className, ...props }: any) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
  ),
  // High-performance image handling
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="my-6 overflow-hidden rounded-md border">
      <img className={cn("mx-auto h-auto w-full object-cover", className)} alt={alt} {...props} />
    </div>
  ),
};

export function MDXContent({ code }: { code: any }) {
  // This is where the magic happens: rendering the markdown string as components
  return <div className="mdx">{code}</div>;
}

export { components };