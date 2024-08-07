export const H1Component = (props: any) => <h1 {...props} className="text-3xl font-bold uppercase">{props.children}</h1>
export const H2Component = (props: any) => <h2 {...props} className="text-2xl font-bold">{props.children}</h2>
export const H3Component = (props: any) => <h3 {...props} className="text-xl font-semibold">{props.children}</h3>
export const PComponent = (props: any) => <p {...props} className="text-lg">{props.children}</p>
export const ULComponent = (props: any) => <ul {...props} className="list-disc list-inside pl-4">{props.children}</ul>
export const LIComponent =(props: any) => <li {...props}>{props.children}</li>