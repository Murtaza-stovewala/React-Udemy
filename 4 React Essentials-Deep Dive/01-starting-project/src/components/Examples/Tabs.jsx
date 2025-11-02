export default function Tabs({children,button,Container='menu'}){//we are setting two different slot in this component i is button slot and another one is children slot if we need more slot we simply add them
    // const ButtonContainer = container;
    return(
        <>
        <Container>
        {button}
        </Container>
        {children}
        </>
    )
}