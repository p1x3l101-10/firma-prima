ServerEvents.recipes(event => {







    //AE2
        event.shaped(
            Item.of('ae2:certus_quartz_cutting_knife', 1), 
            [
            '  A',
            'BA ',
            'CC '
            ],
            {
            A: '#forge:rods/wooden',
            B: 'firmalife:metal/ingot/stainless_steel',
            C: '#forge:gems/certus_quartz'
            }
        )

        event.shaped(
            Item.of('ae2:nether_quartz_cutting_knife', 1), 
            [
            '  A',
            'BA ',
            'CC '
            ],
            {
            A: '#forge:rods/wooden',
            B: 'firmalife:metal/ingot/stainless_steel',
            C: '#forge:gems/nether_quartz'
            }
        )

        event.shaped(
            Item.of('ae2:entropy_manipulator', 1), 
            [
                ' CD',
                ' AB',
                'A  '
            ],
            {
                A: 'firmalife:metal/rod/stainless_steel',
                B: 'ae2:engineering_processor',
                C: 'ae2:energy_cell',
                D: 'ae2:fluix_crystal'
            }
        )

        event.shaped(
            Item.of('ae2:charged_staff', 1), 
            [
                '  B',
                ' A ',
                'A  '
            ],
            {
                A: 'firmalife:metal/rod/stainless_steel',
                B: 'ae2:charged_certus_quartz_crystal'
            }
        )

        event.shaped(
            Item.of('ae2:color_applicator', 1), 
            [
                'DA ',
                'AB ',
                '  C'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:cell_component_4k',
                C: 'ae2:energy_cell',
                D: 'ae2:formation_core'
            }
        )

        event.shaped(
            Item.of('ae2:matter_cannon', 1), 
            [
                'AAD',
                'BC ',
                'A  '
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:cell_component_4k',
                C: 'ae2:energy_cell',
                D: 'ae2:formation_core'
            }
        )

        event.shaped(
            Item.of('ae2:memory_card', 1), 
            [
                'CAA',
                'BDB'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: '#forge:ingots/gold',
                C: 'ae2:calculation_processor',
                D: 'minecraft:redstone'
            }
        )

        event.shaped(
            Item.of('ae2:blank_pattern', 2), 
            [
                'DCD',
                'CBC',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: '#forge:gems/certus_quartz',
                C: 'minecraft:glowstone_dust',
                D: 'ae2:quartz_glass'
            }
        )

        event.shaped(
            Item.of('ae2:basic_card', 2), 
            [
                'BA ',
                'DCA',
                'BA '
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: '#forge:ingots/gold',
                C: 'ae2:calculation_processor',
                D: 'minecraft:redstone'
            }
        )

        event.shaped(
            Item.of('ae2:advanced_card', 2), 
            [
                'BA ',
                'DCA',
                'BA '
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: '#forge:gems/diamond',
                C: 'ae2:calculation_processor',
                D: 'minecraft:redstone'
            }
        )

        event.shaped(
            Item.of('ae2:item_cell_housing', 1), 
            [
                'CBC',
                'B B',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass'
            }
        )

        event.shaped(
            Item.of('ae2:wireless_receiver', 1), 
            [
                ' B ',
                'ACA',
                ' A '
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:fluix_pearl',
                C: 'ae2:quartz_fiber'
            }
        )

        event.shaped(
            Item.of('ae2:wireless_booster', 2), 
            [
                'CBD',
                'AAA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: '#forge:gems/certus_quartz',
                C: 'ae2:fluix_dust',
                D: 'ae2:ender_dust'
            }
        )

        event.shaped(
            Item.of('ae2:view_cell', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: '#forge:gems/certus_quartz'
            }
        )

        event.shaped(
            Item.of('ae2:cell_component_1k', 1), 
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'pneumaticcraft:plastic',
                B: '#ae2:all_certus_quartz',
                C: 'ae2:engineering_processor'
            }
        )

        event.shaped(
            Item.of('ae2:item_storage_cell_1k', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:cell_component_1k'
            }
        )

        event.shaped(
            Item.of('ae2:item_storage_cell_4k', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:cell_component_4k'
            }
        )

        event.shaped(
            Item.of('ae2:item_storage_cell_16k', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:cell_component_16k'
            }
        )

        event.shaped(
            Item.of('ae2:item_storage_cell_64k', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:cell_component_64k'
            }
        )

        event.shaped(
            Item.of('ae2:item_storage_cell_256k', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:cell_component_256k'
            }
        )

        event.shaped(
            Item.of('ae2:spatial_storage_cell_2', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:spatial_cell_component_2'
            }
        )

        event.shaped(
            Item.of('ae2:spatial_storage_cell_16', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:spatial_cell_component_16'
            }
        )


        event.shaped(
            Item.of('ae2:spatial_storage_cell_128', 1), 
            [
                'CBC',
                'BDB',
                'AAA'
            ],
            {
                A: 'dfc:metal/ingot/platinum',
                B: 'minecraft:redstone',
                C: 'ae2:quartz_glass',
                D: 'ae2:spatial_cell_component_128'
            }
        )


        event.shaped(
            Item.of('ae2:inscriber', 1), 
            [
                'ACA',
                'B A',
                'ACA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'tfc:metal/ingot/copper',
                C: 'minecraft:sticky_piston'
            }
        )


        event.shaped(
            Item.of('ae2:charger', 1), 
            [
                'ABA',
                'BC ',
                'ABA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'tfc:metal/ingot/copper',
                C: 'pneumaticcraft:printed_circuit_board'
            }
        )


        event.shaped(
            Item.of('ae2:quantum_ring', 1), 
            [
                'ABA',
                'CDE',
                'ABA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:logic_processor',
                C: 'ae2:engineering_processor',
                D: 'ae2:energy_cell',
                E: '#ae2:smart_dense_cable'
            }
        )


        event.shaped(
            Item.of('ae2:spatial_io_port', 1), 
            [
                'DDD',
                'EBE',
                'ACA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:io_port',
                C: 'ae2:engineering_processor',
                D: '#forge:glass',
                E: 'ae2:fluix_glass_cable'
            }
        )


        event.shaped(
            Item.of('ae2:drive', 1), 
            [
                'ACA',
                'B B',
                'ACA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:fluix_glass_cable',
                C: 'ae2:engineering_processor'
            }
        )


        event.shaped(
            Item.of('ae2:chest', 1), 
            [
                'DBD',
                'E E',
                'ACA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:terminal',
                C: 'tfc:metal/ingot/copper',
                D: '#forge:glass',
                E: 'ae2:fluix_glass_cable'
            }
        )


        event.shaped(
            Item.of('ae2:interface', 1), 
            [
                'ADA',
                'B C',
                'ADA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:annihilation_core',
                C: 'ae2:formation_core',
                D: '#forge:glass'
            }
        )


        event.shaped(
            Item.of('ae2:cell_workbench', 1), 
            [
                'DCD',
                'ABA',
                'AAA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: '#forge:chests/wooden',
                C: 'ae2:calculation_processor',
                D: '#minecraft:wool'
            }
        )


        event.shaped(
            Item.of('ae2:io_port', 1), 
            [
                'DDD',
                'CEC',
                'ABA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:logic_processor',
                C: 'ae2:drive',
                D: '#forge:glass',
                E: 'ae2:fluix_glass_cable'
            }
        )


        event.shaped(
            Item.of('ae2:condenser', 1), 
            [
                'ACA',
                'CBC',
                'ACA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:fluix_dust',
                C: '#forge:glass'
            }
        )


        event.shaped(
            Item.of('ae2:energy_acceptor', 1), 
            [
                'ACA',
                'CBC',
                'ACA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'tfc:metal/ingot/copper',
                C: 'ae2:quartz_glass'
            }
        )


        event.shaped(
            Item.of('ae2:crystal_resonance_generator', 1), 
            [
                'BCB',
                'BDB',
                'AAA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'tfc:metal/ingot/copper',
                C: 'ae2:fluix_block',
                D: 'ae2:charged_certus_quartz_crystal'
            }
        )


        event.shaped(
            Item.of('ae2:vibration_chamber', 1), 
            [
                'BCB',
                'A A',
                'ADA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'tfc:metal/ingot/copper',
                C: 'ae2:fluix_crystal',
                D: 'ae2:energy_acceptor'
            }
        )


        event.shaped(
            Item.of('ae2:growth_accelerator', 1), 
            [
                'ABA',
                'DCD',
                'ABA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: '#ae2:glass_cable',
                C: 'ae2:fluix_block',
                D: 'ae2:quartz_glass'
            }
        )


        event.shaped(
            Item.of('ae2:crafting_unit', 1), 
            [
                'ADA',
                'BCB',
                'ADA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: '#ae2:glass_cable',
                C: 'ae2:logic_processor',
                D: 'ae2:calculation_processor'
            }
        )


        event.shaped(
            Item.of('ae2:pattern_provider', 1), 
            [
                'ADA',
                'B C',
                'ADA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:annihilation_core',
                C: 'ae2:formation_core',
                D: '#tfc:workbenches'
            }
        )


        event.shaped(
            Item.of('ae2:molecular_assembler', 1), 
            [
                'AEA',
                'BDC',
                'AEA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:annihilation_core',
                C: 'ae2:formation_core',
                D: '#tfc:workbenches',
                E: 'ae2:quartz_glass'
            }
        )


        event.shaped(
            Item.of('ae2:spatial_anchor', 1), 
            [
                'BBB',
                'CDC',
                'AEA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:spatial_pylon',
                C: '#ae2:glass_cable',
                D: 'ae2:spatial_cell_component_128',
                E: 'ae2:engineering_processor'
            }
        )


        event.shaped(
            Item.of('ae2:semi_dark_monitor', 1), 
            [
                ' CD',
                'ABD',
                ' CD'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'minecraft:redstone',
                C: 'minecraft:glowstone_dust',
                D: 'ae2:quartz_glass'
            }
        )


        event.shaped(
            Item.of('ae2:import_bus', 1), 
            [
                ' C ',
                'ABA'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'minecraft:sticky_piston',
                C: 'ae2:annihilation_core'
            }
        )


        event.shaped(
            Item.of('ae2:export_bus', 1), 
            [
                'ACA',
                ' B '
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'minecraft:piston',
                C: 'ae2:formation_core'
            }
        )


        event.shaped(
            Item.of('ae2:annihilation_plane', 1), 
            [
                'AB ',
                'CB ',
                'AB '
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:fluix_crystal',
                C: 'ae2:annihilation_core'
            }
        )


        event.shaped(
            Item.of('ae2:formation_plane', 1), 
            [
                'AB ',
                'CB ',
                'AB '
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:fluix_crystal',
                C: 'ae2:formation_core'
            }
        )


        event.shaped(
            Item.of('ae2:me_p2p_tunnel', 1), 
            [
                ' A ',
                'ACA',
                'BBB'
            ],
            {
                A: 'firmalife:metal/ingot/stainless_steel',
                B: 'ae2:fluix_crystal',
                C: 'ae2:engineering_processor'
            }
        )


        event.shaped(
            Item.of('ae2:controller', 1), 
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'ae2:smooth_sky_stone_block',
                B: 'ae2:fluix_crystal',
                C: 'ae2:logic_processor'
            }
        )


        event.shaped(
            Item.of('ae2:tiny_tnt', 1), 
            [
                'BA',
                'AB'
            ],
            {
                A: 'minecraft:gunpowder',
                B: 'tfc:powder/saltpeter'
            }
        )


        // Arc Furnace
        event.custom({
            "type": "immersiveengineering:arc_furnace",
            "results": [
              {
                "count": 1,
                "base_ingredient": {
                  "item": "ae2:silicon"
                }
              }
            ],
            "additives": [
              {
                "count": 2,
                "base_ingredient": {
                  "item": "tfc:powder/flux"
                }
              }
            ],
            "input": {
              "count": 1,
              "base_ingredient": {
                "item": "ae2:certus_quartz_dust"
              }
            },
            "time": 100,
            "energy": 51200
          }
    )
        

       


        //Explosions
        
        event.custom({
            "type": "ae2:charger",
            "ingredient": {
              "item": "minecraft:compass"
            },
            "result": {
              "item": "ae2:meteorite_compass"
            }
          }
        )



  //Coke Oven
  event.custom({
  "type": "immersiveengineering:coke_oven",
  "creosote": 0,
  "input": {
    "item": "ae2:sky_dust"
  },
  "result": {
    "item": "ae2:sky_stone_block"
  },
  "time": 1800
}
  )

})
