export default function Section({title,children,...data }){
    return( 
    <section {...data}>
        <h2>{title}</h2>
        {children}
    </section>);
}