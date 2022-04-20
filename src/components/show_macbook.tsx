import { MacBook_extend } from "./interface/interface";

export const ShowMacBook_Row = (props: MacBook_extend) => {
    return(
        <tr>
            <td>{ props.describe.model }</td>
            <td>{ props.describe.audio }</td>
            <td>{ props.describe.camera_web }</td>
            <td>{ props.describe.segment }</td>
            <td>{ props.describe.capacitate_ssd }</td>
            <td>{ props.describe_extend.tip_display }</td>
            <td>{ props.describe_extend.frecventa_ram }</td>
        </tr>
    );
}