import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import style from "../styles/bloglist.module.css"

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: {}
        };
    }
    
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.github}`)
            .then(res => res.json())
            .then(
                (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    item: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
      
    render() {
        const { error, isLoaded, item } = this.state;    
        return(
            <div className={style.item}>
                <div className={style.box}>
                    <img src={"https://avatars1.githubusercontent.com/"${this.props.github}"?size=200"} className={style.image}/>
                    <p className={style.name}>{this.props.name}</p>
                    <a className={style.link} target="_blank" href={`https://github.com/${this.props.github}`}>{this.props.name}</a>
                </div>
            </div>
        )
    }
}


export default() => {
    const query = useStaticQuery(graphql`
        query {
            allDataYaml {
                nodes {
                    github
                    name
                    id
                }
            }
        }
    `);

    const items = [];

    query.allDataYaml.nodes.forEach(function(item,index){
        items.push(
            <Item name={item.name} github={item.github} key={item.id}/>
        )
    })

    return (
        <div className={style.row}>
            {items}
        </div>
    )
}
