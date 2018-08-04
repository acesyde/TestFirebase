import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { IDefaultProps } from "./types";

export default class Navbar extends React.Component<IDefaultProps> {
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