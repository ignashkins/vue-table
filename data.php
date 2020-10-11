<?php
header('Content-Type: application/json');

$data = [
    'fields' => [
        'product_weight', 'product_quantity', 'product_active'
    ],
    'products' => [
        [
            'id' => 1,
            'props' => [
                [
                    'value' => true,
                    'sort' => 2,
                    'fieldName' => 'product_active',
                    'fieldType' => 'checkbox',
                ],
                [
                    'value' => 'Product #1',
                    'sort' => 1,
                    'fieldName' => 'product_name',
                    'fieldType' => 'input',
                ],
                [
                    'value' => 765,
                    'sort' => 3,
                    'fieldName' => 'product_weight',
                    'fieldType' => 'input',
                ],
                [
                    'value' => 98,
                    'sort' => 4,
                    'fieldName' => 'product_quantity',
                    'fieldType' => 'input',
                ],
            ],
            'editable' => false,
            'active' => true,
        ],
        [
            'id' => 2,
            'props' => [
                [
                    'value' => true,
                    'sort' => 2,
                    'fieldName' => 'product_active',
                    'fieldType' => 'checkbox',
                ],
                [
                    'value' => 'Product #2',
                    'sort' => 1,
                    'fieldName' => 'product_name',
                    'fieldType' => 'input',
                ],
                [
                    'value' => 580,
                    'sort' => 2,
                    'fieldName' => 'product_weight',
                    'fieldType' => 'input',
                ],
                [
                    'value' => 7,
                    'sort' => 3,
                    'fieldName' => 'product_quantity',
                    'fieldType' => 'input',
                ],
            ],
            'editable' => true,
        ],
        [
            'id' => 3,
            'props' => [
                [
                    'value' => false,
                    'sort' => 2,
                    'fieldName' => 'product_active',
                    'fieldType' => 'checkbox',
                ],
                [
                    'value' => 'Product #3',
                    'sort' => 1,
                    'fieldName' => 'product_name',
                    'fieldType' => 'input',
                ],
                [
                    'value' => 745,
                    'sort' => 2,
                    'fieldName' => 'product_weight',
                    'fieldType' => 'input',
                ],
                [
                    'value' => 95,
                    'sort' => 3,
                    'fieldName' => 'product_quantity',
                    'fieldType' => 'input',
                ],
            ],
            'editable' => false,
        ],
    ]
];
echo json_encode($data);