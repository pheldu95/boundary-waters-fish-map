<?php

namespace App\DataFixtures;

use App\Entity\FishSpecies;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class FishSpeciesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $fishSpeciesNames = [
            'Smallmouth Bass',
            'Northern Pike',
            'Walleye',
            'Muskellunge',
            'Largemouth Bass',
            'Crappie',
            'Bluegill',
            'Sunfish',
            'Perch',
            'Lake Trout',
            'Brook Trout',
            'Rainbow Trout',
            'Brown Trout',
            'Whitefish',
            'Yellow Perch',
            'Rock Bass',
            'Pumpkinseed',
            'Cisco (Lake Herring)',
            'Sucker',
            'Carp'
        ];

        foreach ($fishSpeciesNames as $name) {
            $fishSpecies = new FishSpecies();
            $fishSpecies->setName($name);

            $manager->persist($fishSpecies);
        }

        $manager->flush();
    }
}
