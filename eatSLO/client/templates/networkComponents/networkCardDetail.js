Template.networkCardDetail.helpers(
{
   activeCard: function()
   {
      return SloAccounts.findOne({_id: Session.get("activeCardId")});
   }
});