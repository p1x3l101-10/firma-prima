ServerEvents.recipes(event => {
  event.remove({ output: 'ars_nouveau:archwood_planks' });
	event.shapeless('4x ars_nouveau:archwood_planks', [Item.of('#tfc:saws').ignoreNBT(), '#forge:logs/archwood']).damageIngredient(0).keepIngredient('#tfc:saws');
})
