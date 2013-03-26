test("queue form", function() {
  $("form[name='foo']").queueable();
  ok(Queueables, "object exists");
  equal(Queueables.forms.length, 1);
  equal(Queueables.serializeForm("foo"), $("form[name='foo']").serializeArray());
});