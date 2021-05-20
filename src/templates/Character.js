//Creacion de mockup del template Character
const Character = () => {
    const view = "\
        <div class='character-main'>\
            <article class='characters-card'>\
                <img src='image' alt='name'>\
                <h2>Name</h2>\
            </article>\
            <article class='characters-card'>\
                <h4>Episodes:</h4>\
                <h4>Status:</h4>\
                <h4>Species:</h4>\
                <h4>Gender:</h4>\
                <h4>Origin:</h4>\
                <h4>Last Location:</h4>\
            </article>\
        </div>";
    return view;
}
export default Character;