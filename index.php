<?php
require_once get_template_directory() . '/app/index.html';

$boot = new App_Boot(); ?>

<!-- Boot data -->
<script>app = {boot: <?= $boot->getJSON(JSON_PRETTY_PRINT) ?>}</script>