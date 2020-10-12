<?php
header('Content-Type: application/json');

$data = [
    'fields' => [
        [
            'name' => 'product_id',
            'title' => 'id',
            'editable' => false,
            'displayable' => false,
            'displayValue' => false,
            'type' => 'input',
            'sort' => 5,
        ],
        [
            'name' => 'product_name',
            'title' => 'Название',
            'editable' => false,
            'displayable' => true,
            'displayValue' => true,
            'type' => 'input',
            'sort' => 2,
        ],
        [
            'name' => 'product_weight',
            'title' => 'Вес',
            'editable' => true,
            'displayable' => true,
            'displayValue' => true,
            'type' => 'input',
            'sort' => 3,
        ],
        [
            'name' => 'product_quantity',
            'title' => 'Кол-во',
            'editable' => true,
            'displayable' => true,
            'displayValue' => true,
            'type' => 'input',
            'sort' => 4,
        ],
        [
            'name' => 'product_active',
            'title' => '',
            'editable' => true,
            'displayable' => true,
            'displayValue' => false,
            'type' => 'checkbox',
            'sort' => 1,
        ]
    ],
    'products' => [
        [
            'props' => [
                [
                    'value' => 1,
                    'field' => 'product_id',
                ],
                [
                    'value' => true,
                    'field' => 'product_active',
                ],
                [
                    'value' => 'Product #1',
                    'field' => 'product_name',
                ],
                [
                    'value' => 765,
                    'field' => 'product_weight',
                ],
                [
                    'value' => 98,
                    'field' => 'product_quantity',
                ],
            ],
            'editable' => false,
            'active' => true,
        ],
        [
            'props' => [
                [
                    'value' => 2,
                    'field' => 'product_id',
                ],
                [
                    'value' => true,
                    'field' => 'product_active',
                ],
                [
                    'value' => 'Product #2',
                    'field' => 'product_name',
                ],
                [
                    'value' => 580,
                    'field' => 'product_weight',
                ],
                [
                    'value' => 7,
                    'field' => 'product_quantity',
                ],
            ],
            'editable' => true,
        ],
        [
            'props' => [
                [
                    'value' => 3,
                    'field' => 'product_id',
                ],
                [
                    'value' => false,
                    'field' => 'product_active',
                ],
                [
                    'value' => 'Product #3',
                    'field' => 'product_name',
                ],
                [
                    'value' => 745,
                    'field' => 'product_weight',
                ],
                [
                    'value' => 95,
                    'field' => 'product_quantity',
                ],
            ],
            'editable' => true,
        ],
    ]
];
echo json_encode($data);