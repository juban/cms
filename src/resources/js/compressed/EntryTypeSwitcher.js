!function(a){Craft.EntryTypeSwitcher=Garnish.Base.extend({$form:null,$typeSelect:null,$spinner:null,$fields:null,init:function(){this.$form=a("#entry-form"),this.$typeSelect=a("#entryType"),this.$spinner=a('<div class="spinner hidden" style="position: absolute; margin-'+Craft.left+': 2px;"/>').insertAfter(this.$typeSelect.parent()),this.$fields=a("#fields"),this.addListener(this.$typeSelect,"change","onTypeChange")},onTypeChange:function(b){this.$spinner.removeClass("hidden"),Craft.postActionRequest("entries/switch-entry-type",this.$form.serialize(),a.proxy(function(a,b){if(this.$spinner.addClass("hidden"),"success"==b){var c=this.$fields.data("pane");c.deselectTab(),this.$fields.html(a.paneHtml),c.destroy(),this.$fields.pane(),Craft.initUiElements(this.$fields),Craft.appendHeadHtml(a.headHtml),Craft.appendFootHtml(a.footHtml),"undefined"!=typeof slugGenerator&&slugGenerator.setNewSource("#title"),Garnish.$win.trigger("resize")}},this))}})}(jQuery);
//# sourceMappingURL=EntryTypeSwitcher.js.map