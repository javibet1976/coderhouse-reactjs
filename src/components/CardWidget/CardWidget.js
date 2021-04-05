import "./CardWidget.css";
import React, { PureComponent } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';



export default class CardWidget extends PureComponent {
    render() {
        return (
                <SvgIcon  color="secondary">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </SvgIcon>
        )
    }
}
