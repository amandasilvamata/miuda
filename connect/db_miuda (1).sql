 -- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11/10/2024 às 16:32
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_miuda`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_boleto`
--

CREATE TABLE `tb_boleto` (
  `idBoleto` int(5) NOT NULL,
  `idTipoPagamento` int(5) NOT NULL,
  `codigoBarras` varchar(47) NOT NULL,
  `vencimento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cardapio`
--

CREATE TABLE `tb_cardapio` (
  `idCardapio` int(5) NOT NULL,
  `itensCardapio` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_carrinho`
--

CREATE TABLE `tb_carrinho` (
  `idCarrinho` int(5) NOT NULL,
  `idCliente` int(5) NOT NULL,
  `idItemCarrinho` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cartaocredito`
--

CREATE TABLE `tb_cartaocredito` (
  `idCartaoCredito` int(5) NOT NULL,
  `idTipoPagamento` int(5) NOT NULL,
  `cpf` int(16) NOT NULL,
  `numeroCartao` int(16) NOT NULL,
  `nomeTitular` varchar(255) NOT NULL,
  `validade` date NOT NULL,
  `cvv` int(3) NOT NULL,
  `parcelas` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_chavepix`
--

CREATE TABLE `tb_chavepix` (
  `idChavePix` int(5) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `email` varchar(255) NOT NULL,
  `celular` int(11) NOT NULL,
  `chaveAleatoria` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cliente`
--

CREATE TABLE `tb_cliente` (
  `idCliente` int(5) NOT NULL,
  `idEndereco` int(5) NOT NULL,
  `idDados` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_dadosacesso`
--

CREATE TABLE `tb_dadosacesso` (
  `idDadosAcesso` int(5) NOT NULL,
  `idDados` int(5) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `cpf` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_dadospedido`
--

CREATE TABLE `tb_dadospedido` (
  `idDadosPedido` int(5) NOT NULL,
  `idEndereco` int(5) NOT NULL,
  `idCarrinho` int(5) NOT NULL,
  `frete` float NOT NULL,
  `total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_endereco`
--

CREATE TABLE `tb_endereco` (
  `idEndereco` int(5) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `ponto_referencia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_favoritos`
--

CREATE TABLE `tb_favoritos` (
  `idFavoritos` int(5) NOT NULL,
  `idLivro` int(5) NOT NULL,
  `idCliente` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_formapagamento`
--

CREATE TABLE `tb_formapagamento` (
  `idFormaPagamento` int(5) NOT NULL,
  `idTipoPagamento` int(5) NOT NULL,
  `idDadosPedido` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_itemcarrinho`
--

CREATE TABLE `tb_itemcarrinho` (
  `idItemCarrinho` int(5) NOT NULL,
  `idLivro` int(5) NOT NULL,
  `quantidade` int(3) NOT NULL,
  `total` float NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_livro`
--

CREATE TABLE `tb_livro` (
  `idLivro` int(5) NOT NULL,
  `ISBN` varchar(20) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `preco` float NOT NULL,
  `estoque` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pedido`
--

CREATE TABLE `tb_pedido` (
  `idPedido` int(5) NOT NULL,
  `idCliente` int(5) NOT NULL,
  `idDadosPedido` int(5) NOT NULL,
  `idStatusPedido` int(5) NOT NULL,
  `dataPedido` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pix`
--

CREATE TABLE `tb_pix` (
  `idPix` int(5) NOT NULL,
  `idTipoPagamento` int(5) NOT NULL,
  `idChavePix` int(5) NOT NULL,
  `qrCode` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_statuspedido`
--

CREATE TABLE `tb_statuspedido` (
  `idStatusPedido` int(5) NOT NULL,
  `pagamentoEfetuado` int(1) NOT NULL,
  `enviado` int(1) NOT NULL,
  `entregue` int(1) NOT NULL,
  `cancelado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_tipopagamento`
--

CREATE TABLE `tb_tipopagamento` (
  `idTipoPagamento` int(5) NOT NULL,
  `idPix` int(5) NOT NULL,
  `idBoleto` int(5) NOT NULL,
  `idCartaoCredito` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_boleto`
--
ALTER TABLE `tb_boleto`
  ADD PRIMARY KEY (`idBoleto`),
  ADD KEY `FK_idTipoPagamento` (`idTipoPagamento`);

--
-- Índices de tabela `tb_cardapio`
--
ALTER TABLE `tb_cardapio`
  ADD PRIMARY KEY (`idCardapio`);

--
-- Índices de tabela `tb_carrinho`
--
ALTER TABLE `tb_carrinho`
  ADD PRIMARY KEY (`idCarrinho`),
  ADD KEY `FK_IdCliente` (`idCliente`),
  ADD KEY `FK_IdItemCarrinho` (`idItemCarrinho`);

--
-- Índices de tabela `tb_cartaocredito`
--
ALTER TABLE `tb_cartaocredito`
  ADD PRIMARY KEY (`idCartaoCredito`),
  ADD UNIQUE KEY `UQ_cpf` (`cpf`),
  ADD KEY `FK_idTipoPagamento` (`idTipoPagamento`);

--
-- Índices de tabela `tb_chavepix`
--
ALTER TABLE `tb_chavepix`
  ADD PRIMARY KEY (`idChavePix`),
  ADD UNIQUE KEY `UQ_cpf` (`cpf`),
  ADD UNIQUE KEY `UQ_cnpj` (`cnpj`),
  ADD UNIQUE KEY `UQ_email` (`email`);

--
-- Índices de tabela `tb_cliente`
--
ALTER TABLE `tb_cliente`
  ADD PRIMARY KEY (`idCliente`),
  ADD KEY `FK_IdEndereco` (`idEndereco`),
  ADD KEY `FK_IdDados` (`idDados`);

--
-- Índices de tabela `tb_dadosacesso`
--
ALTER TABLE `tb_dadosacesso`
  ADD PRIMARY KEY (`idDadosAcesso`),
  ADD UNIQUE KEY `UQ_email` (`email`) USING BTREE,
  ADD UNIQUE KEY `UQ_cpf` (`cpf`),
  ADD KEY `FK_idDados` (`idDados`) USING BTREE;

--
-- Índices de tabela `tb_dadospedido`
--
ALTER TABLE `tb_dadospedido`
  ADD PRIMARY KEY (`idDadosPedido`),
  ADD KEY `FK_idEndereco` (`idEndereco`),
  ADD KEY `FK_idCarrinho` (`idCarrinho`);

--
-- Índices de tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  ADD PRIMARY KEY (`idEndereco`);

--
-- Índices de tabela `tb_favoritos`
--
ALTER TABLE `tb_favoritos`
  ADD PRIMARY KEY (`idFavoritos`),
  ADD KEY `FK_idLivro` (`idLivro`),
  ADD KEY `FK_idCliente` (`idCliente`);

--
-- Índices de tabela `tb_formapagamento`
--
ALTER TABLE `tb_formapagamento`
  ADD PRIMARY KEY (`idFormaPagamento`),
  ADD UNIQUE KEY `FK_idDadosPedido` (`idDadosPedido`),
  ADD KEY `FK_idTipoPagamento` (`idTipoPagamento`);

--
-- Índices de tabela `tb_itemcarrinho`
--
ALTER TABLE `tb_itemcarrinho`
  ADD PRIMARY KEY (`idItemCarrinho`),
  ADD KEY `FK_idLivro` (`idLivro`);

--
-- Índices de tabela `tb_livro`
--
ALTER TABLE `tb_livro`
  ADD PRIMARY KEY (`idLivro`);

--
-- Índices de tabela `tb_pedido`
--
ALTER TABLE `tb_pedido`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `FK_idCliente` (`idCliente`),
  ADD KEY `FK_idDadosPedido` (`idDadosPedido`),
  ADD KEY `FK_idStatusPedido` (`idStatusPedido`);

--
-- Índices de tabela `tb_pix`
--
ALTER TABLE `tb_pix`
  ADD PRIMARY KEY (`idPix`),
  ADD KEY `FK_idTipoPagamento` (`idTipoPagamento`),
  ADD KEY `FK_idChavePix` (`idChavePix`);

--
-- Índices de tabela `tb_statuspedido`
--
ALTER TABLE `tb_statuspedido`
  ADD PRIMARY KEY (`idStatusPedido`);

--
-- Índices de tabela `tb_tipopagamento`
--
ALTER TABLE `tb_tipopagamento`
  ADD PRIMARY KEY (`idTipoPagamento`),
  ADD KEY `FK_idPix` (`idPix`),
  ADD KEY `FK_idBoleto` (`idBoleto`),
  ADD KEY `FK_idCartaoCredito` (`idCartaoCredito`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_boleto`
--
ALTER TABLE `tb_boleto`
  MODIFY `idBoleto` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_cardapio`
--
ALTER TABLE `tb_cardapio`
  MODIFY `idCardapio` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_carrinho`
--
ALTER TABLE `tb_carrinho`
  MODIFY `idCarrinho` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_cartaocredito`
--
ALTER TABLE `tb_cartaocredito`
  MODIFY `idCartaoCredito` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_chavepix`
--
ALTER TABLE `tb_chavepix`
  MODIFY `idChavePix` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_cliente`
--
ALTER TABLE `tb_cliente`
  MODIFY `idCliente` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_dadosacesso`
--
ALTER TABLE `tb_dadosacesso`
  MODIFY `idDadosAcesso` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_dadospedido`
--
ALTER TABLE `tb_dadospedido`
  MODIFY `idDadosPedido` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_endereco`
--
ALTER TABLE `tb_endereco`
  MODIFY `idEndereco` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_favoritos`
--
ALTER TABLE `tb_favoritos`
  MODIFY `idFavoritos` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_formapagamento`
--
ALTER TABLE `tb_formapagamento`
  MODIFY `idFormaPagamento` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_itemcarrinho`
--
ALTER TABLE `tb_itemcarrinho`
  MODIFY `idItemCarrinho` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_livro`
--
ALTER TABLE `tb_livro`
  MODIFY `idLivro` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pedido`
--
ALTER TABLE `tb_pedido`
  MODIFY `idPedido` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pix`
--
ALTER TABLE `tb_pix`
  MODIFY `idPix` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_statuspedido`
--
ALTER TABLE `tb_statuspedido`
  MODIFY `idStatusPedido` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_tipopagamento`
--
ALTER TABLE `tb_tipopagamento`
  MODIFY `idTipoPagamento` int(5) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
