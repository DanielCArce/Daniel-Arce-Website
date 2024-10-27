export const H1 = (props: any) => <h1 {...props} className="text-4xl text-center font-bold my-4">{props.children}</h1>
export const H2 = (props: any) => <h2 {...props} className="text-3xl font-medium my-3">{props.children}</h2>
export const H3 = (props: any) => <h3 {...props} className="text-2xl font-light">{props.children}</h3>
export const P = (props: any) => <p {...props} className="text-xl leading-7">{props.children}</p>
export const UL = (props: any) => <ul {...props} className="list-inside list-disc">{props.children}</ul>
export const LI = (props: any) => <li {...props}>{props.children}</li>