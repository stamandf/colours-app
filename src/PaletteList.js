import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

class PaletteList extends React.Component {
    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes, deletePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">Create New Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette 
                                {...palette}
                                handleDelete={deletePalette} 
                                handleClick={() => this.goToPalette(palette.id)}
                                key={palette.id}
                                id={palette.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);