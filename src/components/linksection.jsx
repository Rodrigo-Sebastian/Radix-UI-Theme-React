import {Flex, Link,} from "@radix-ui/themes";
import './linksection.css'; 

export default function Linksection (){
    return(
        <section className="section__Links">
            <Flex direction="row" gap="6" align="center">
                <Link size="3">Mail</Link>
                <Link size="3" className="active">Dashboard</Link>
                <Link size="3">Cards</Link>
                <Link size="3">Tasks</Link>
                <Link size="3">Playground</Link>
                <Link size="3">Forms</Link>
                <Link size="3">Music</Link>
                <Link size="3">Authentication</Link>
            </Flex>
        </section>
    )
}