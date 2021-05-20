//Creacion de mockup del template Header
const Header = () => {
    const view = "\
        <hr>\
        <div class='header-main'>\
            <div class='header-logo'>\
                <h1>\
                    <a href='/'>\
                        Cientifico\
                    </a>\
                <h1>\
            </div>\
            <div class='header-nav'>\
                <a href='/#/about/'>\
                    About\
                </a>\
            </div>\
        </div>\
        <hr>";
    return view;
}
export default Header;