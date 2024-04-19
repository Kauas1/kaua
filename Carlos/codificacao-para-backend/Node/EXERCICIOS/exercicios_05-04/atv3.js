/*Atividade 3: Informações de Memória
Escreva um código que exiba a quantidade total de memória do sistema em bytes.
Em seguida, converta o valor para uma unidade mais legível, como kilobytes (KB), megabytes (MB) ou gigabytes (GB).*/

const os = require('node:os')
const memory = os.freemem()
const KB = memory/1000
const MB = KB/1000
const GB = MB/1000

console.log(`${memory.toFixed(2)}bytes \n ${KB.toFixed(2)} KiloBytes \n ${MB.toFixed(2)} MegaBytes \n ${GB.toFixed(2)} GigaBytes`)