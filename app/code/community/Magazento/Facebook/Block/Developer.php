<?php

class Magazento_Facebook_Block_Developer extends Mage_Adminhtml_Block_System_Config_Form_Fieldset {

    public function render(Varien_Data_Form_Element_Abstract $element) {
        $content = '<p></p>';
        $content.= '<style>
                    .developer {
                            background: #FAFAFA;
                            border: 1px solid #CCCCCC;
                            margin-bottom: 10px;
                            padding: 10px;
                            height: auto;
                    }

                    .developer h3 {
                            color: #444;
                    }

                    .contact-type {
                            color: #EA7601;
                            font-weight: bold;
                    }

                    .developer img {
                            float: left;
                    }

                    .developer .info {
                            background: #E7EFEF;
                            padding: 5px 10px 0 5px;
                            margin-left: 210px;
                            height: 195px;
                    }
                    </style>';

        return $content;


    }


}
