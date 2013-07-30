
class Backbone.DatepickerView extends Backbone.View

  template: window.JST.datepicker

  tagName: 'span'

  defaults:
    dateFormat: 'yyyy-MM-dd'
    name: 'date'
    span: 'span2'
    placeholder: 'Date'
    defaultValue: null
    settings:
      pickSeconds: false

  initialize: ->
    @options = _.defaults @options, @defaults
    @render()

  render: =>
    @$el.html @template @options
    @initDatepicker()
    this

  initDatepicker: =>
    setTimeout =>
      @$date = @$('.date')
      @$date.datetimepicker @options.settings
      if @options.defaultValue
        picker = @$date.data 'datetimepicker'
        picker.setLocalDate new Date @options.defaultValue
    ,
      0
