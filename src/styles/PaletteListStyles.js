import sizes from './sizes';

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#ffffff",  
        overflow: "scroll"
    },
    heading: {
        fontSize: "2rem"
    },
    link: {
        fontSize: "1rem",
        fontWeight: "500",
        textDecoration: "none",
        transition: "all .2s",
        "&:hover": {
            color: "#0066cd",
            transform: "scale(1.1)"
        }
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("xs")]: {
            width: "75%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        marginBottom: "4rem",   
        color: "black",
        "& a": {
            color: "black"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.4rem",
        }
    },
    button: {
        color: "black",
        fontSize: "1rem",
    }
}