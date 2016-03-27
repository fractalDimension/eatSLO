Template.networkSideBar.onRendered(function (){
   // Initialize collapse button
   $(".button-collapse").sideNav();
   // Initialize collapsible 
   $('.collapsible').collapsible();

   console.log('sidebar rendered');
});