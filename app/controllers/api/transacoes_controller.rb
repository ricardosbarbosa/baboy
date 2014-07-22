class Api::TransacoesController < ApplicationController
  before_action :set_transacao, only: [:show, :edit, :update, :destroy]

  # GET /api/transacoes
  # GET /api/transacoes.json
  def index
    data = Time.now
    data = DateTime.parse(params[:data]) if params[:data]
    
    @transacoes = Transacao.where("(strftime('%m', date) + 0 = ?) and (strftime('%Y', date) + 0 = ?)", data.month, data.year)
                           
    # ('extract(month from date) = ?', data.month)
  end

  # GET /api/transacoes/1
  # GET /api/transacoes/1.json
  def show
  end

  # GET /api/transacoes/new
  def new
    @transacao = Transacao.new
  end

  # GET /api/transacoes/1/edit
  def edit
  end

  # POST /api/transacoes
  # POST /api/transacoes.json
  def create
    @transacao = Transacao.new(transacao_params)

    respond_to do |format|
      if @transacao.save
        format.html { redirect_to @transacao, notice: 'Transacao was successfully created.' }
        format.json { render :show, status: :created, location: nil }
      else
        format.html { render :new }
        format.json { render json: @transacao.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/transacoes/1
  # PATCH/PUT /api/transacoes/1.json
  def update
    respond_to do |format|
      if @transacao.update(transacao_params)
        format.html { redirect_to @transacao, notice: 'Transacao was successfully updated.' }
        format.json { render :show, status: :ok, location: @transacao }
      else
        format.html { render :edit }
        format.json { render json: @transacao.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/transacoes/1
  # DELETE /api/transacoes/1.json
  def destroy
    @transacao.destroy
    respond_to do |format|
      format.html { redirect_to api_transacoes_url, notice: 'Transacao was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transacao
      @transacao = Transacao.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def transacao_params
      params[:transacao].permit(:descricao, :date, :valor, :tipo, :efetuado, :categoria)
    end
end
