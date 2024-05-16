import Body1 from "./body1";
import Body2 from "./body2";
import Body3 from "./body3";
import './bodylayout.css';

export function Bodylayout() {
    return (
        <div className="bodylayout">
            <div className="Layout">
                <div>
                    <Body1></Body1>
                </div>

                <div>
                    <Body2></Body2>
                </div>

                <div>
                    <Body3></Body3>
                </div>

            </div>
        </div>
    )
}