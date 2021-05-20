//Creacion de mockup del template Character
import getData from '../utils/getData'
import getHash from '../utils/getHash'
const Character = async () => {
    const id = getHash()
    const character = await getData(id)
    const view = "\
        <div class='character-main'>\
            <article class='characters-card'>\
                <hr>\
                <h2>"+character.name+"</h2>\
                <hr>\
                <h4><b>Episodes: </b><span>"+character.episode.length+"</span></h4>\
                <h4><b>Status: </b><span>"+character.status+"</span></h4>\
                <h4><b>Species: </b><span>"+character.species+"</span></h4>\
                <h4><b>Gender: </b><span>"+character.gender+"</span></h4>\
                <h4><b>Origin: </b><span>"+character.origin.name+"</span></h4>\
                <h4><b>Last Location: </b>"+character.location.name+"</h4>\
            </article>\
            <article class='characters-card'>\
                <img src='"+character.image+"' alt='"+character.name+"'>\
                </article>\
        </div>";
    return view;
}
export default Character;