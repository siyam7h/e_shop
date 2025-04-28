export function T1NavBtn(props) {
    let shop = props.shop || [];
    shop = shop.map(rec);

    function rec(b){
        return <p>{b.name}</p>
    }

    console.log(shop);
    console.log(1);
    return(
        <li className=" p-2.5 ">
            <a>{props.name}</a>
            <div className=" absolute top-11 w-full left-0">
                {shop}
            </div>
        </li>
    )
}