import React from "react";
import {withStyles} from "@material-ui/core/styles";
import space from "./../assets/img/website/space.jpg";
import {Grid, Button,} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const styles = theme => ({
    img: {
        display: 'none'
    },
    canvas: {
        backgroundColor: "#000000",
        display: 'flex',
        margin: 'auto'
    },
    buttons: {
        paddingLeft: theme.spacing(1)
    }
});

class Canvas extends React.Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            ship: {
                x: 50,
                y: 200,
                radius: 20
            }
        };

        this.canvasRef = React.createRef();
        this.imgRef = React.createRef();
    }

    moveUp = () => {
        if(this.state.ship.y - 20 > 0)
            this.setState({ship: {x: this.state.ship.x, y: this.state.ship.y - 10, radius: 20}});
    };

    moveDown = () => {
        if(this.state.ship.y + 20 > 0)
            this.setState({ship: {x: this.state.ship.x, y: this.state.ship.y + 10, radius: 20}});
    };

    moveLeft = () => {
        if(this.state.ship.x - 20 > 0)
            this.setState({ship: {x: this.state.ship.x - 10, y: this.state.ship.y, radius: 20}});
    };

    moveRight = () => {
        if(this.state.ship.x + 20 > 0)
            this.setState({ship: {x: this.state.ship.x + 10, y: this.state.ship.y, radius: 20}});
    };


    drawBackground = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");
        const background = this.imgRef.current;
        background.onload = () => {
            ctx.drawImage(background, 0, 0);
        };
    };

    draw = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.state.ship.x, this.state.ship.y,
            this.state.ship.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    };

    componentDidMount() {
        //this.drawBackground();
        this.draw();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //this.drawBackground();
        this.draw();
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid item>
                    <canvas ref={this.canvasRef} width={640} height={425} className={classes.canvas}/>
                    <img ref={this.imgRef} src={space} width="100%" height="auto" alt="space" className={classes.img}/>
                </Grid>
                <Grid  className={classes.buttons}>
                    <Grid container>
                        <Grid item md>

                        </Grid>
                        <Grid item md>
                            <Button variant="contained" color="primary" onClick={this.moveUp}>
                                <ArrowUpwardIcon/>
                            </Button>
                        </Grid>
                        <Grid item md>

                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md>
                            <Button variant="contained" color="primary" onClick={this.moveLeft}>
                                <ArrowBackIcon/>
                            </Button>
                        </Grid>
                        <Grid item md>
                            <Button variant="contained" color="primary" onClick={this.moveDown}>
                                <ArrowDownwardIcon/>
                            </Button>
                        </Grid>
                        <Grid item md>
                            <Button variant="contained" color="primary" onClick={this.moveRight}>
                                <ArrowForwardIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Canvas);
