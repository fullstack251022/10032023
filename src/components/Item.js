import styles from './Item.module.css';
import DateComponent from "./DateComponent";

const Item = (props) => {



    return (
        <div>

            <h4>{props.title}</h4>  

            <img
                className={styles['my-class']}    
                src={props.image}
            />
            <p>{props.description}</p>
            <p>{props.price} $</p>
            {/* <p>{props.date}</p> */}
            <DateComponent date={props.date} />           
        </div>
    )
}

export default Item