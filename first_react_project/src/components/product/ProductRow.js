export function ProductRow({produit}){
    const style = produit.stocke ? undefined : {color :'red'}
    return <tr>
        <td style={style}>{produit.name}            </td>
        <td>{produit.prix}</td>
    </tr>
}