import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { IDefaultProps } from "./types";

class Navbar extends React.Component<IDefaultProps> {

    public static defaultProps: Partial<IDefaultProps> = {
        title: "Hello"
    }

    public render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;