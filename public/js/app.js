"use strict";

class App{
	constructor(){
		}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

}

class Component extends App{
	constructor(){
		super();
	}
	recipeLayout(){
		this.reRender(`
			 <nav>
    <div class="nav-wrapper">
     <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Bread</a>

        

      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li></li>
       <li><label for="search"><i class="material-icons">search</i></label></li>

        <li><a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Create</a></li>
        <li><a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Get Started</a></li>
        
      </ul>
    </div>
  </nav>

   <div class="slider">
    <ul class="slides">
      <li>
        <img src="img/bread.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Special Breads!</h3>
          
        </div>
      </li>
      <li>
        <img src="img/a.jpg"> <!-- random image -->
        <div class="caption left-align">
          <h3>Everything You Want</h3>
         
        </div>
      </li>
      <li>
        <img src="img/h.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h3>Bigger And Tastier!</h3>
         
        </div>
      </li>
      <li>
        <img src="img/g.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>JabzzKillerBread!</h3>
          <h5 class="light grey-text text-lighten-3">"Makes Everday Delicious</h5>
        </div>
      </li>
    </ul>
  </div>
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            


			`,document.getElementById("app"));
	}

	}
let component = new Component();
component.recipeLayout();
