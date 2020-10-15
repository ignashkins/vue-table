<?php
header('Content-Type: application/json');

$data = [
    'requests' => [
        'fields' => [
            [
                'name' => 'request_id',
                'title' => 'id',
                'editable' => false,
                'displayable' => true,
                'displayValue' => true,
                'type' => 'input',
                'sort' => 1,
                'duplicatable' => false,
                'mask' => '*',
            ],
            [
                'name' => 'request_name',
                'title' => 'Название',
                'editable' => false,
                'displayable' => true,
                'displayValue' => true,
                'type' => 'input',
                'sort' => 2,
                'duplicatable' => false,
                'mask' => '*',
            ],
        ],
        'elements' => [
            [
                'props' => [
                    [
                        'value' => 1,
                        'field' => 'request_id',
                    ],
                    [
                        'value' => 'Request # 1',
                        'field' => 'request_name',
                    ]
                ],
                'products' => [
                    'fields' => [
                        [
                            'name' => 'product_id',
                            'title' => 'id',
                            'editable' => false,
                            'displayable' => false,
                            'displayValue' => false,
                            'type' => 'input',
                            'sort' => 5,
                            'duplicatable' => false,
                            'mask' => '*',
                        ],
                        [
                            'name' => 'product_name',
                            'title' => 'Название',
                            'editable' => false,
                            'displayable' => true,
                            'displayValue' => true,
                            'type' => 'input',
                            'sort' => 2,
                            'duplicatable' => false,
                            'mask' => '*',
                        ],
                        [
                            'name' => 'product_weight',
                            'title' => 'Вес',
                            'editable' => true,
                            'displayable' => true,
                            'displayValue' => true,
                            'type' => 'input',
                            'sort' => 3,
                            'duplicatable' => true,
                            'mask' => '9{*}',
                        ],
                        [
                            'name' => 'product_quantity',
                            'title' => 'Кол-во',
                            'editable' => true,
                            'displayable' => true,
                            'displayValue' => true,
                            'type' => 'input',
                            'sort' => 4,
                            'duplicatable' => true,
                            'mask' => '9{*}',
                        ],
                        [
                            'name' => 'product_active',
                            'title' => '',
                            'editable' => true,
                            'displayable' => true,
                            'displayValue' => false,
                            'type' => 'checkbox',
                            'sort' => 1,
                            'duplicatable' => false,
                            'mask' => '*',
                        ],
                        [
                            'name' => 'product_plus',
                            'title' => '',
                            'editable' => true,
                            'displayable' => true,
                            'displayValue' => false,
                            'type' => 'button',
                            'sort' => 6,
                            'duplicatable' => false,
                            'mask' => '*',
                        ]
                    ],
                    'elements' => [
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
                                [
                                    'value' => '+',
                                    'field' => 'product_plus',
                                ],
                            ],
                            'editable' => false,
                            'parent' => -1,
                            'subRows' => 0,
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
                                [
                                    'value' => '+',
                                    'field' => 'product_plus',
                                ],
                            ],
                            'editable' => true,
                            'parent' => -1,
                            'subRows' => 0,
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
                                [
                                    'value' => '+',
                                    'field' => 'product_plus',
                                ],
                            ],
                            'editable' => true,
                            'parent' => -1,
                            'subRows' => 0,
                        ],
                    ],
                ],
                'editable' => false,
                'parent' => -1,
                'subRows' => 0,
            ],
            [
                'props' => [
                    [
                        'value' => 2,
                        'field' => 'request_id',
                    ],
                    [
                        'value' => 'Request # 2',
                        'field' => 'request_name',
                    ]
                ],
                'products' => [],
                'editable' => false,
                'parent' => -1,
                'subRows' => 0,
            ],
            [
                'props' => [
                    [
                        'value' => 3,
                        'field' => 'request_id',
                    ],
                    [
                        'value' => 'Request # 3',
                        'field' => 'request_name',
                    ]
                ],
                'products' => [],
                'editable' => false,
                'parent' => -1,
                'subRows' => 0,
            ],
        ],
    ],
];
echo json_encode($data);